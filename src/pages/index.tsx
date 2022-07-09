import Link from 'next/link'

import type { NextPage } from 'next'
import { Box, Flex, HStack, Text, Tooltip, VStack } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Flex
        w="100%"
        h="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <VStack spacing={4}>
          <VStack>
            <Text
              fontSize="7xl"
              fontWeight="extrabold"
              textAlign="center"
              justifyContent="center"
            >
              <Link href="https://nextjs.org/" passHref>
                <Tooltip
                  label="The React Framework
for Production: Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed."
                >
                  <Text as="a" target="_blank">
                    {' '}
                    Next.js
                  </Text>
                </Tooltip>
              </Link>{' '}
              +{' '}
              <Link href="https://chakra-ui.com/" passHref>
                <Tooltip label="Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.">
                  <Text as="a" target="_blank" color="#319795">
                    {' '}
                    ChakraUI
                  </Text>
                </Tooltip>
              </Link>
            </Text>

            <HStack spacing={2} fontWeight="500" fontSize="2xl">
              <Link href="https://react-hook-form.com/" passHref>
                <Tooltip label="Performant, flexible and extensible forms with easy-to-use validation.">
                  <Text as="a" target="_blank">
                    React Hook Form
                  </Text>
                </Tooltip>
              </Link>

              <Text>•</Text>

              <Link href="https://github.com/jquense/yup" passHref>
                <Tooltip label="Yup is a JavaScript schema builder for value parsing and validation. Define a schema, transform a value to match, validate the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformations.">
                  <Text as="a" target="_blank">
                    Yup
                  </Text>
                </Tooltip>
              </Link>

              <Text>•</Text>

              <Link href="https://lodash.com/" passHref>
                <Tooltip label="A modern JavaScript utility library delivering modularity, performance & extras.">
                  <Text as="a" target="_blank">
                    Lodash
                  </Text>
                </Tooltip>
              </Link>
            </HStack>
          </VStack>

          <Box
            w="100%"
            h="0px"
            borderTopColor="gray.200"
            borderTopWidth="1px"
          />

          <Flex mt={8}>
            <Text fontSize="md" fontWeight="normal" textAlign="center">
              Made by{' '}
              <Link href="https://hubxp.com.br/" passHref>
                <Text
                  as="a"
                  textDecoration="underline"
                  textDecorationStyle="dashed"
                  textDecorationColor="teal.500"
                  textUnderlineOffset="3px"
                >
                  hubxp
                </Text>
              </Link>{' '}
              |{' '}
              <Link
                href="https://github.com/hub-xp/nextjs-chrakraui-template/stargazers"
                passHref
              >
                <Text as="a" fontWeight="500" target="blank">
                  Give some love 💚
                </Text>
              </Link>
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </>
  )
}

export default Home
