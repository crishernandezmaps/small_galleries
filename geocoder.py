#!/usr/bin/python3
# coding: utf-8
import pandas as pd
from geopy.geocoders import Bing

bing_key = "YOUR-API-KEY" # https://www.bingmapsportal.com/Account
pathToFile = "data/galleries_addresses.csv"

def lat(row):
    geolocator = Bing(bing_key, timeout=5)
    location = geolocator.geocode(row['Address'])
    return str(location.latitude)

def lon(row):
    geolocator = Bing(bing_key, timeout=5)
    location = geolocator.geocode(row['Address'])
    return str(location.longitude)

df = pd.read_csv(pathToFile,sep=',')
df['lat'] = df.apply(lambda row: lat(row),axis=1)
df['lon'] = df.apply(lambda row: lon(row),axis=1)
df.to_csv('data/coordinates.csv',sep=',')
print(df)
