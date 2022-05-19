import { View, Text , useWindowDimensions , StyleSheet , ImageBackground} from 'react-native'
import React from 'react'

export default function Banner() {
    const dimension = useWindowDimensions();
    const styles = StyleSheet.create({
        bannerContaier:{
            minWidth:dimension.width,
            minHeight:350,
            resizeMode:'cover',
            paddingVertical:40,
            paddingHorizontal:20,
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        headerContainer:{

        },
        header:{
            fontSize:30,
            fontWeight:"bold",
            textAlign:'center',
            color:'white'
        },
        textContainer:{
            paddingTop:5
        },
        text:{
            color:'white',
            textAlign:'center',
            fontSize:20,
        }
    })
  return (
    <ImageBackground source={require("../../images/banner.png")} style={styles.bannerContaier}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Skill Hai! To Future Hai!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>"CWS is an on-demand marketplace for top Programming engineers, developers, consultants, architects, programmers, and tutors. Get your projects built by vetted web programming freelancers or learn from expert mentors with team training & coaching experiences in <Text style={{fontWeight:"bold"}}>Project based training.</Text>"</Text>
      </View>
    </ImageBackground>
  )
}