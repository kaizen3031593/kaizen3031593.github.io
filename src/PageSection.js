import React from 'react';
import {
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
} from '@elastic/eui';

const PageSection = ({ title, children }) => {
  const titleID = () => title.toLowerCase().split(' ').join('-');

  return (
    <EuiPageContent>
      <EuiPageContentHeader>
        <EuiPageContentHeaderSection>
          <EuiTitle id={titleID()}>
            <h2>{title}</h2>
          </EuiTitle>
        </EuiPageContentHeaderSection>
      </EuiPageContentHeader>
      {children}
    </EuiPageContent>
  );
};

export default PageSection;
