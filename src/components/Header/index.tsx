import React from 'react';

import { Container, Title, IconButton } from './styles';

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
      <Container>
          <Title>{title}</Title>
          <IconButton 
            title="Test"
            onPress={() => undefined}
          />
      </Container>
  );
}

export default Header;