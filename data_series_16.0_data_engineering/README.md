# Data Engineering Chicago Taxi Trips Queries
For the reason of using the BigQuery service from the Google Cloud platform, I will attach the code through this markdown file.
Keep in mind that the query is using the **bigquery-public-data.chicago_taxi_trips.taxi_trips**

## First Query
```sql
SELECT 
    FORMAT_TIMESTAMP('%A', TIMESTAMP(trip_start_timestamp)) AS weeekday, 
    AVG(trip_seconds) AS avg_seconds,
    APPROX_QUANTILES(trips_seconds, 2)[OFFSET(1)] AS median_seconds, 
    STDDEV(trip_seconds) AS stddev_seconds
FROM
    `bigquery-public-data.chicago_taxi_trips.taxi_trips`
WHERE
    EXTRACT(DAYOFWEEK FROM TIMESTAMP(trip_start_timestamp)) =! 1
GROUP BY 
    weekday
ORDER BY 
    median_seconds
```

## Second Query 
```sql
SELECT 
    pickup_community_are, 
    dropoff_community_area, 
    COUNT(DISTINCT(taxi_id)) AS num_trips
FROM 
    `bigquery-public-data.chicago_taxi_trips.taxi_trips`
WHERE
    pickup_community_area IS NOT NULL AND
    dropoff_community_area IS NOT NULL AND
    EXTRACT(YEAR FROM trip_start_timestamp) = 2023 AND 
    TIMESTAMP_DIFF(trip)end_timestamp, trip_start_timestamp, MINUTE) > 10
GROUP BY 
    pickup_community_area, 
    dropoff_community_area
ORDER BY 
    num_trips DESC
LIMIT 5
```

## Third Query 
```sql
SELECT 
    payment_type, 
    AVG(fare) AS average_farem,
    AVG(tips) AS average_tips,
    AVG(tolls) AS average_tolls,
FROM 
    `bigquery-public-data.chicago_taxi_trips.taxi_trips`
WHERE
    EXTRACT(YEAR FROM trip_start_timestamp) = 2019
GROUP BY 
    payment_type
ORDER BY 
    num_trips DESC
LIMIT 9
```

### __*NOTE: You could check the queries' results and analyses [here](data_engineering_results.pdf) or by [Google Drive](https://drive.google.com/drive/folders/1akvgnJFXxHZcnNEWBTyt67seBuCi7kfH?usp=sharing) (query results only)*__
