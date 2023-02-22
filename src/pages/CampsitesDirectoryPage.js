import { Container } from "reactstrap";
import SubHeader from "../features/comments/SubHeader";

import CampsitesList from "../features/campsites/CampsitesList";

const CampsitesDirectoryPage = () => {
  return (
    <Container>
      <SubHeader current="Directory" />
      <CampsitesList />
    </Container>
  );
};

export default CampsitesDirectoryPage;
