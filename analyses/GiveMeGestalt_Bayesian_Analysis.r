# open the necessary libraries
library(tidyverse)
library(brms)
library(ggplot2)

# read in the csv results and select the needed columns
d = read_csv2("GiveMeGestalt_filtered_results.csv") %>% 
  filter(trial_name %in% c("rating_scale_object", "rating_scale_like")) %>% 
  select(submission_id, trial_name, response, picture_nr, artist)

# cast data into appropriate type
d_wide = spread(d, key = trial_name, value = response) %>% 
  mutate(likeability = factor(rating_scale_like, ordered = T),
         objects = factor(paste0("C", rating_scale_object), ordered = T),
         artist = factor(artist),
         picture_nr = factor(picture_nr),
         submission_id = factor(submission_id),
         objects_forward = objects)

# inspect data
ggplot(d_wide, aes(x = objects, y= likeability)) + geom_jitter() + geom_smooth(method = "lm")

# further visual display
a <- ggplot(data=d)+
  geom_bar(mapping= aes(x = trial_name, fill = response), position = "dodge")
a

b <- ggplot(data=d)+
  geom_bar(mapping= aes(x = trial_name, fill = response))+
  facet_wrap(~artist)
b

# *****Section 1: the second three models treat the object-ratings as ordinal using the new brms monotonic models*****

# hierarchical model with only fixed effects
model_1 = brm(data = d_wide,
                formula = likeability ~ mo(objects),
                family=cumulative("logit")
)
model_1
plot(marginal_effects(model_1), categorcial = T)


# hierarchical model with by-item (pictures) and by-subject random intercepts
model_2 = brm(data = d_wide,
                formula = likeability ~ mo(objects) + (1 | picture_nr) + (1 | submission_id),
                family=cumulative("logit")
)
model_2
plot(marginal_effects(model_2), categorical = T)


# hierarchical model with by-subject random intercepts and fixed effect of artist
model_3 = brm(data = d_wide,
                formula = likeability ~ mo(objects) + artist + (1 | submission_id),
                family=cumulative("logit")
)
model_3
plot(marginal_effects(model_3), categorical = T)

# *****Section 2: the first three models treat the object-ratings as interval-scale/ metric*****

# hierarchical model with only fixed effects
model_4 = brm(data = d_wide,
              formula = likeability ~ as.double(objects),
              family=cumulative("logit")
)
model_4
plot(marginal_effects(model_4))

# hierarchical model with by-item (pictures) and by-subject random intercepts
model_5 = brm(data = d_wide,
              formula = likeability ~ as.double(objects) + (1 | picture_nr) + (1 | submission_id),
              family=cumulative("logit")
)
model_5
plot(marginal_effects(model_5))

# hierarchical model with by-subject random intercepts and fixed effect of artist
model_6 = brm(data = d_wide,
              formula = likeability ~ as.double(objects) + artist + (1 | submission_id),
              family=cumulative("logit")
)
model_6
plot(marginal_effects(model_6))

# model comparison with loo
loo(model_1, model_2, model_3, model_4, model_5, model_6)
loo

