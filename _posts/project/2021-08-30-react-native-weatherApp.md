---
layout: post-til
title: React Native - 간단한 날씨 앱 만들기
meta: Evergreen (Updated 210820)
source: https://nomadcoders.co/react-fundamentals/lobby
category: project
---
2021.08.28 ~ 09.04

간단한 날씨 앱을 react native로 만든 프로젝트이다. 주요 내용은 
1. 디바이스의 위치 정보 얻기 (expo-cli)
2. 위치 정보와 API를 통해 날씨 정보 획득 (axios)
3. 정보들에 맞는 UI 스크린에 보여주기 (react native)

### Installing expo-cli
`npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'`로 expo 설치가 안되어 아래와 같은 코드로 해결했다.

```js
& sudo npm install --global expo-cli
```

### Github와 연동하기
일단 Github 홈피에서 새로운 Repository를 생성하기
```js
$ git init

$ git remote add origin "yourURL"

$ git pull origin main --allow-unrelated-histories

$ git commit -m "Description"

$ git push origin main
```

### expo-cli & Xcode
expo cli Xcode needs to be installed (don't worry, you won't have to use it), would you like to continue to the App Store?
1. Open Xcode

2. go to preferences

3. go to locations tab

4. select an Xcode version in the select labeled "Command Line Tools"


### 웹 브라우저로 API data 확인
`https://api.openweathermap.org/data/2.5/weather?lat=37&lon=122&appid=ca3f1b9673fa1a16714d616face9034f`

### Code overview in Weather.js
```js
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
        Haze: {
            iconName: "weather-fog",
            gradient: ['#7F7FD5', '#86A8E7', '#91EAE4']
            title: "타이틀입니다"
            subtitle: "서브타이틀입니다"
        },
    }

export default function Weather ({temp, condition}){
    return (
        <LinearGradient
        // Button Linear Gradient
        colors={weatherOption[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle='light-content'/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOption[condition].iconName} size={96} color="white" />
                <Text style={styles.tempText}>    
                    {temp}º
                </Text>
            </View>
            <View style={styles.halfContainer}>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>
                        {weatherOption[condition].title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {weatherOption[condition].subtitle}
                    </Text>
                </View>
            </View>
      </LinearGradient>
    )
}

Weather.proptypes = {
    temp: PropTypes.number.isRequired,
    conditions: PropTypes.oneOf([
        "Dust",
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tempText: {
        color: "white",
        fontSize: 30,
    },
    title: {
        color: "white",
        fontSize: 34,
        fontWeight: "300",
        marginBottom: 20,
    },
})
```
전체적인 흐름은 App.js에서 온도와 날씨 상태 정보를 가져와 그 정보에 맞는 아이콘, 배경화면 색, 글들을 스크린에 보여준다.

### [@expo/vector-icons@12.0.5](https://icons.expo.fyi/)

### 느낀점
좀더 자세한 꾸미는 방법 예를들어 글씨체, interaction & animation. Also, how to import images and manage those. es6 문법을 배워보자. 네비게이션과 로그인 기능을 구현해보자.