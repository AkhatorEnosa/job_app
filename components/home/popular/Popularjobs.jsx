import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularjobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setselectedJob] = useState()
  
  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer remote',
    page: '1',
  })

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setselectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary}/> ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <FlatList 
              data={data}
              renderItem={({ item }) => (
                <PopularjobCard
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handleCardPress}
                />
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )
        }
      </View>
    </View>
  )
}

export default Popularjobs