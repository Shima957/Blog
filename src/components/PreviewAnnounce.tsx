import { Center, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const PreviewAnnounce = () => {
  return (
    <Center bgColor="yellow.200" p={4}>
      <Text color="orange.700">現在プレビュー中です。</Text>
      <Text color="orange.700" textDecoration="underline">
        <Link as={NextLink} href={`/api/exitPreview`}>
          プレビューをOFFにする
        </Link>
      </Text>
    </Center>
  );
};

export default PreviewAnnounce;
