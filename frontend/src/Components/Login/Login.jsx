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
    Heading,
    Text,
    useColorModeValue,
   Link,
    Center,
    VStack,
    useToast,
    Spacer,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';
  import { FaGoogle} from 'react-icons/fa';
  import { Link as Linkrouter } from 'react-router-dom';

  export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
   const navigate=useNavigate()
   const [isLoading,setIsloading] = useState(false)
   const toast = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
      const handleEmailChange = (e) => {
          setEmail(e.target.value)
      }
      const handlePasswordChange = (e) => {
          setPassword(e.target.value)
      }

      const handleSubmit = async () => {
        if(email === "" ||
        password === "" ){
          toast({
            title: 'All the fields are required',
            description: "Please fill all the fields",
            status: 'error',
            duration: 1500,
            isClosable: true,
            position:"top"
          })
        }else{
          const payload = {
            email,
            password
        }
        await fetch("https://kind-jade-python-fez.cyclic.app/login", {
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
              },
        })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
            if(res.msg=== "invalid credential")
         {
          toast({
            title: 'Invalid Details',
            description: "Invalid Email or Password.",
            status: 'error',
            duration: 1500,
            isClosable: true,
            position:"top"
          })
         }
        
        else if (res.msg === "please try again later")
        {
          toast({
            title: 'Login Failed.',
            description: "Wrong email or Password.",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position:"top"
          })
        }
        else if(res.msg === "login successfull")
        {
          toast({
            title: 'Logged in Successfull.',
            description: "Welcome",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position:"top"
          })
          localStorage.setItem("token", res.token)
          localStorage.setItem("email",payload.email)
          localStorage.setItem("userId",res.userId)
          navigate("/")
        }         
        })
      .catch((err) => console.log(err))
        }
        
    }
    
      
    return (
  
  <>
  <Box w={"full"} >
  <Box paddingTop={"6%"} paddingBottom={"2%"} bgColor={"#4B2C54"}>
  <Heading
    fontSize={["35px", "35px", "45px"]}
    fontFamily={["GT Haptik Medium", "sans-serif"]}
    wordBreak={"break-word"}
  >
    <Text color={"white"} textAlign={"center"}>
    Login Project Pilot Account
    </Text>
  </Heading>
 
 
</Box>
    <Box bgColor={"#4B2C54"} width={"100%"} height={"700px"} zIndex={"3"}>
  
  <Box style={{ position: "relative"}}  bg={"rgb(44, 19, 56)"} width={["97%","84%","60%","42%"]} color={"white"}  margin={"auto"}>
      <Stack spacing={8} mx={'auto'} py={12} px="6%" >
       <HStack w="100%" margin={"auto"} h="60px">
            <Button h="100%" w={["50%","40%"]} background={"white"} color={"black"} borderRadius={"25px"} leftIcon={<FaGoogle />}>
             Login with Google
            </Button>
            <Spacer/>
            
       </HStack>
       <Box 
           bg={useColorModeValue('rgb(44, 19, 56)', 'gray.700')}
           p={3}>
           <Stack spacing={4} > 
             <FormControl border='5px' id="email" isRequired>
              <FormLabel>Email</FormLabel>
               <Input width={"100%"} h="52px" type="email" placeholder="email" value={email} onChange={handleEmailChange} required />
             </FormControl>
             <FormControl id="password" isRequired>
             <FormLabel>Password</FormLabel>
               <InputGroup>
                 <Input h="52px" type={showPassword ? 'text' : 'password'} placeholder="password" value={password} onChange={handlePasswordChange} required/>
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
             <HStack> 
              <Spacer/> 
              <Link color={'blue.400'} _hover={{
                   color: '#E57CD8',
                 }}>Forgot password?
              </Link>
             </HStack>
             <HStack spacing={4} pt={2}>
               <Button 
                 loadingText="Logging in"
                 borderRadius={"16px"}
                 size="lg"
                 width={"100%"}
                 marginRight={"6%"}
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
                 Login
               </Button> 
             </HStack>
             <Stack pt={6}>
               <Text align={'center'} fontSize={"20px"} >
               </Text>
             </Stack>
           </Stack>
         </Box>
       </Stack>
    </Box> 
    <VStack spacing={4} mt="20px">
           <Text color={"white"}>Don't you have account ?</Text>
           <Linkrouter to="/signup"><Button 
              loadingText="Submitting"
              borderRadius={"16px"}
              size="lg"
              width={"200px"}
              margin={"auto"}
              bg={'rgb(229, 124, 216)'}
              color={'white'}
              
              _hover={{
                bg: 'rgb(86, 66, 96)',
              }}>
              Signup
            </Button>
          </Linkrouter> 
    </VStack>
    </Box>
  </Box>
 
  </>
    );
  }