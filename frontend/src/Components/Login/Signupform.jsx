import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Text,
    useColorModeValue,
    Spacer,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';
  import { FaGoogle} from 'react-icons/fa';
  import { useToast } from '@chakra-ui/react'
  
  export default function Signup1() {
    const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail] = useState('')
    const [name,setname] = useState('')

    const [password, setPassword] = useState('')
    const [isLoading,setIsloading] = useState(false)
    const toast = useToast()
    
   const nav =useNavigate()
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleNameChange = (e) => {
      setname(e.target.value)
  }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
  
    let checkRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[#@$%^&*!])(?=.{8})/

    const handleSubmit = async () => {
      if(email === "" ||
        password === "" ||
        name === ""){
          toast({
            title: 'All the fields are required',
            description: "Please fill all the fields",
            status: 'error',
            duration: 1500,
            isClosable: true,
            position:"top"
          })
        }else
        if(checkRegex.test(password)){
          const payload = {
            email,
            password,
            name
        }
         await fetch("https://kind-jade-python-fez.cyclic.app/register"
         , {
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
              },
        })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
           if(res.msg === "User already exist, please login")
           {
            toast({
              title: 'User already exist',
              description: "User already exist, please login",
              status: 'error',
              duration: 1500,
              isClosable: true,
              position:"top"
            })
           }
         if (res.msg === "New user registered")
          {
            toast({
              title: 'Account created.',
              description: "We've created your account for you. Please Login",
              status: 'success',
              duration: 2500,
              isClosable: true,
              position:"top"
            })
            setTimeout(()=>{ nav("/login",{replace:true})},1000)
          }
        })
        }else{
          toast({
            title: 'Invalid Password',
            description: "Password length is minimum 8, it includes at least one Uppercase letter, special character & number",
            status: 'error',
            duration: 4500,
            isClosable: true,
            position:"top"
          })

        }
        
        
       
    }
  
    return (

  
      <>
 <Box bg={"rgb(44, 19, 56)"} color={"white"} px="10%">
   <Stack spacing={5} mx={'auto'} py={12}>
     <Stack direction={["column","column","row"]}>
       <Link href="https://localhost:3000/google">
         <Button  h="50px" background={"white"} color={"black"} borderRadius={"16px"} leftIcon={<FaGoogle />}>
           Login with Google
         </Button>
       </Link>
       <Spacer/>
      
     </Stack>
      
     <Box
           rounded={'lg'}
           bg={useColorModeValue('rgb(44, 19, 56)', 'gray.700')}
           textAlign="center">
           <Stack spacing={4} >
           <FormControl border='5px' id="name" isRequired>
             <FormLabel>Name</FormLabel>
               <Input width={"100%"} h="50px" type="text" placeholder="name" value={name} onChange={handleNameChange} required/>
             </FormControl>
             <FormControl border='5px' id="email" isRequired >
             <FormLabel>Email</FormLabel>
               <Input width={"100%"} h="50px" type="email" placeholder="email" value={email} onChange={handleEmailChange} required />
             </FormControl>
             <FormControl id="password" isRequired >
             <FormLabel>Password</FormLabel>
               <InputGroup>
               
                 <Input h="50px" type={showPassword ? 'text' : 'password'} placeholder="password" value={password} onChange={handlePasswordChange} required/>
                 <InputRightElement h={'full'}>
                   <Button 
                     variant={'lightMode'}
                     onClick={() =>
                       setShowPassword((showPassword) => !showPassword)
                     }>
                     {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                   </Button>
                 </InputRightElement>
               </InputGroup>
             </FormControl>
             <HStack spacing={4}>
            
               <Button 
                 loadingText="Submitting"
                 borderRadius={"16px"}
                 size="lg"
                 width={"95%"}
                 margin="auto"
                 bg={'rgb(229, 124, 216)'}
                 color={'white'}
                 
                 _hover={{
                   bg: 'rgb(86, 66, 96)',
                 }}
                 onClick={
                   ()=>{
                     setIsloading(true)
                     setTimeout(() => {
                         setIsloading(false)
                          handleSubmit()
                     },1000)
                     
                   }
                 }
                 isLoading={isLoading}
                 >
                 Sign up
               </Button>
             </HStack>
             <Stack pt={6}>
               <Text align={'center'} fontSize={"10px"}>
               Registration implies agreement to our terms and privacy policy, with the option to receive Project Pilot marketing messages – unsubscribe at any time.
               </Text>
             </Stack>
           </Stack>
         </Box>
       </Stack> 
    </Box>
    </>
   );
  }