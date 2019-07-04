# open the necessary libraries
library(tidyverse)
library(ggpubr)

# read in the csv results
data <- read_csv2("GiveMeGestalt_filtered_results.csv")

# transform the data into the needed format
data_temp <- as_tibble(data) %>% mutate(response = as.integer(response))
data_temp

x <- filter(data_temp, trial_name == 'rating_scale_like') %>% 
  select(c('response', 'picture_nr'))%>% 
  group_by(picture_nr) %>% 
  summarise(response = mean(response))
x
y <- filter(data_temp, trial_name == 'rating_scale_object') %>% 
  select(c('response', 'picture_nr')) %>% 
  group_by(picture_nr) %>% 
  summarise(response = mean(response))
y

data_formatted <- merge(x,y, by = 'picture_nr')
data_formatted

# Pearson correlation and scatterplot with regression line 
ggscatter(data_formatted, x = "response.x", y = "response.y", 
          add = "reg.line", conf.int = TRUE, 
          cor.coef = TRUE, cor.method = "pearson",
          xlab = "Detectability", ylab = "Liking")

res <- cor.test(data_formatted$response.x, data_formatted$response.y, 
                method = "pearson")
res

#extract the p.value
res$p.value

#extract the correlation coefficient
res$estimate

#the amount of variance explained
res$estimate^2
