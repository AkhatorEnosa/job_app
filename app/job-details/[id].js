import { View, Text, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import useFetch from '../../hook/useFetch'
import { COLORS, icons, SIZES } from '../../constants'
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'

const tabs = ['About', 'Qualifications', 'Responsibilities']

const JobDetails = () => {
    const params = useGlobalSearchParams()
    const router = useRouter()

    // console.log("params", params)

    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    })

    const [refreshing, setrefreshing] = useState(false)
    const [activeTab, setactiveTab] = useState(tabs[0])

<<<<<<< HEAD
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch()
        setRefreshing(false)
    }, []);

    const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title='Qualifications'
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "No data provided"} />
        );

      case "Responsibilities":
        return (
          <Specifics
            title='Responsibilities'
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };
=======
    const onRefresh = () => {

    }

    const displayTabContent = () => {
        switch (activeTab) {
            case 'Qualifications':
                return <Specifics
                    title={activeTab}
                    points={data[0].job_highlights?.activeTab ?? 'N/A'}
                />
                break;

            case 'About':
                return <JobAbout
                    info={data[0].job_description ?? "No data provided"}
                />
                
                break;

            case 'Responsibilities':
                return <Specifics
                    title={activeTab}
                    points={data[0].job_highlights?.activeTab ?? 'N/A'}
                />
                
                break;
        
            default:
                break;
        }
    }
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095

  return (
    <SafeAreaView style={{
        flex: 1, backgroundColor: COLORS.lightWhite
    }}>
        <Stack.Screen 
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.left}
                        dimension="60%"
                        handlePress={() => router.back()}
                    />
                ),
<<<<<<< HEAD
                // headerRight: () => (
                //     <ScreenHeaderBtn 
                //         iconUrl={icons.share}
                //         dimension="60%"
                //     />
                // ),
=======
                headerRight: () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.share}
                        dimension="60%"
                    />
                ),
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095
                headerTitle: ''
            }}
        />

        <>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
            >
                {isLoading ? (
                        <ActivityIndicator size='large' color={COLORS.primary}/>
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : data.length === 0 ? (
                        <Text>No data</Text>
                    ) : (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company 
                                companyLogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                location={data[0].job_country}
                            />

                            <JobTabs 
                                tabs={tabs}
                                activeTab={activeTab}
                                setactiveTab={setactiveTab}
                            />

                            {displayTabContent()}
                        </View>
                    )
                }
            </ScrollView>

<<<<<<< HEAD
            <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'}/>
=======
            <JobFooter url={data[0]?.job_google_link ?? 'https://cateers.google.com/jobs/results'}/>
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095
        </>
    </SafeAreaView>
  )
}

export default JobDetails