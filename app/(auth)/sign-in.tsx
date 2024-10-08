import {View, Text, ScrollView, Image} from 'react-native'
import { Link } from "expo-router";

import {images, icons} from '@/constants'
import InputField from '@/components/InputField'
import {useState} from 'react'
import CustomButton from '@/components/CustomButton'
import OAuth from '@/components/OAuth';

const SignIn = () => {
  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  })


  const onSignInPress =(async)=>{

  }
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]"></Image>
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">Welcome </Text>
        </View>
        <View className="p-5">
          

        <InputField 
          label="Email"
          placeholder="Enter your Email"
          icon={icons.email}
          value={form.email}
          onChangeText={(value)=> setForm({...form, email: value})}/>

        <InputField 
          label="Password"
          placeholder="Enter your Password"
          icon={icons.lock}
          secureTextEntry = {true}
          value={form.Password}
          onChangeText={(value)=> setForm({...form, password: value})}/>


          <CustomButton title="Sign In" onPress={onSignInPress} className="mt-6"/>


          <OAuth/>

        <Link href="/sign-up" className="text-lg text-center text-general-200 mt-5">
          <Text>Don't have an account? </Text>
          <Text className="text-primary-500">Log In</Text>
          
        </Link>
         
        </View>
      </View>
    </ScrollView>
  )
}

export default SignIn
