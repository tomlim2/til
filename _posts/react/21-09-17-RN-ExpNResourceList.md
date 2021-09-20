---
layout: post-base
title: React Native - Basic examples & resources
meta: React Native guide
source: https://reactrouter.com
category: ReactAndReactNative
---
React Native를 공부하면서 배우고 재밌다고 생각하는 코드들을 적어보았다. 

## Core components
### Iamge
```jsx
<Image source = {require('./react-native.jpg')} style={{width:100, height:100}}></Image>
);
```
### Counting press with limited number
```jsx
import React, { useState } from 'react';

const App = () => {
  const [pressedCount, setPressedCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button
        title='Press me'
        onPress={() => setPressedCount(pressedCount+1)
        }
        disabled={pressedCount >= 3}
      />
    </View>
  );
};
```

### Scroll View
```jsx
<ScrollView horizontal>
  <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
  <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
  <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
</ScrollView>
```

### Input text with dot
```jsx
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  return (
    <View style={{
      flex: 1,
      alignContent: 'center', 
      justifyContent: 'center', 
      padding: 16,
    }}>
      <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'What is your name?'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)}
        secureTextEntry
      />
    </View>
  );
};
```

### Combining components
```jsx
const App = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Box color = "red" />
    <Box color = "green" />
    <Box color = "blue" />
  </View>
);

export const Box = (props) => (
   <View style = {{width: 100, height: 100,backgroundColor: props.color}} />
);
```

## Styling
```jsx
import { StyleSheet, View, Pressable } from 'react-native';

const App = () => (
  <View style={styles.layout}>
    <Pressable>
      {(state) => <Box pressed = {state.pressed} />}
    </Pressable>
  </View>
);

export const Box = (props) => {
  return (
    <View style={[styles.box, props.pressed && {backgroundColor: 'blue'}]} />
  )
};

export const AwesomeBox = (props) => (
  <View style={[styles.box, props.isActive && { backgroundColor: 'purple' }]} />
);

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
```

```jsx
import React, { useState } from 'react';
 
const App = () => {
  const [isPressed, setPressed] = useState(false);
 
  return (
    <View style={[
      styles.layout,
      isPressed && { backgroundColor: 'blue' },
    ]}>
      <Button
        title="Change color"
        onPress={() => setPressed(true)}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
```

## Connecting Data through `.Map()`
```jsx
//reactNative
data.woofs.map(woof => (
  <WoofCard
    key={woof.id}
    name={woof.name}
    avatar={woof.avatar}
  />
));
```
```jsx
//react
{movies.map(movie => (
    <Movie
    key={movie.id}
    id={movie.id} 
    year={movie.year} 
    title={movie.title} 
    summary={movie.summary} 
    poster={movie.medium_cover_image} 
    genres={movie.genres} 
    />
))}
```

## Connecting data through [Flatlist]((https://reactnative.dev/docs/flatlist))
`.map()`를 대안으로 사용하는걸 추천한다. ScrollView의 일부 기능들도 있으며 가독성 또한 좋다. [공식문서]((https://reactnative.dev/docs/flatlist))와 [사용예시](https://snack.expo.dev/@younsoolim/test-2021-09-19_woof)를 활용하자.

## Navigation
Drawer, Stack, Tab 이 셋이 메인 네비게이션 패턴들이다.

```jsx
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SignInScreen = () => {
  const nav = useNavigation();
  return(
    <View style={styles.layout}>
    <Text style={styles.title}>Hi there</Text>
    <Button 
      onPress={()=> nav.navigate("Main")}
      title="Login"
      />
    <Button 
      onPress={()=>nav.navigate("SignUp")}
      title="SignUp"
      />
  </View>
  ) 
};

const SignUpScreen = () => {
  const nav = useNavigation();
  return (
  <View style={styles.layout}>
    <Text style={styles.title}>Sign Up</Text>
    <Button title="Go to Main" onPress={()=>nav.navigate("Main")}/>
  </View>
);}

// --- Main Nav ---
const HomeScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>
      Home
    </Text>
  </View>
);

const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);
// --- Main Nav End---

// --- Core Nav ---
const MyStack = () => (
  <Stack.Navigator headerMode='none'>    
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
);
// --- Core Nav End---

const App = () => (
  <NavigationContainer>
    <MyStack/>
  </NavigationContainer>
);
```
[Authentication flow](https://reactnavigation.org/docs/auth-flow/)와 [Tab 커스터마이즈](https://reactnavigation.org/docs/tab-based-navigation/#customizing-the-appearance)를 참조하자

## Conclusion
한번 무언가 만들어보자.

## Resources
* 커스터마이즈 할때는 react native [styleGuide](https://reactnative.dev/docs/style)를 꼭 확인하자
* 시간날 때 [Thinking in react](https://reactjs.org/docs/thinking-in-react.html)를 읽어보자