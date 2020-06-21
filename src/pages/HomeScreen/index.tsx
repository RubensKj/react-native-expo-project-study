import React from 'react';
import { Text } from 'react-native';

import { Container, Link } from './styles';

interface Props {
    navigation: {
        navigate(nameScreen: string): void;
    }
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <Container>
            <Text>Hello world!!</Text>
            <Link 
                title="Go to Login!!"
                onPress={() => navigation.navigate('Login')}
            />
        </Container>
    );
}

export default HomeScreen;