import React from 'react'
import { useRouter } from 'expo-router';
import useFetch from '../../../hook/useFetch';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './nearbyjobs.style'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import { COLORS } from '../../../constants';

const Nearbyjobs = () => {
  const router = useRouter();
  
  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer remote',
    page: '1',
    num_of_pages: '1'
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary}/> ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            data?.map((job) => (
              <NearbyJobCard 
                 job={job}
                 key={`nearby-job-${job?.job_id}`}
                 handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              /> 
            ))
          )
        }
      </View>
    </View>
  )
}

export default Nearbyjobs