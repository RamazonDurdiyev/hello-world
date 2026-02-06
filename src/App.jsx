import "./App.css";
import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import { UserProfile } from "./UserProfile";
import { StyledForm } from "./StyledForm";
import { CandidateProfile } from "./CandidatePofile";
import { ContactForm } from "./ContactForm";
import { Product } from "./product";
import { Greeting } from "./Greeting";
import { CardWrapper } from "./CardWrapper";
import { UserDetails } from "./UserDetails";
import { ProductList } from "./ProductList";
import { NameList } from "./NameList";
import { Alert } from "./Alert";
import { NewButton } from "./NewButton";
import { CustomButtom } from "./CustomButtom";
import { Contact } from "./Contact";
import { Newsletter } from "./Newsletter";
import { Menu } from "./Menu";

function App() {
  return (
    <div>
      <Menu />
      <Contact />
      <Newsletter />
      <CustomButtom text="Like"/>
      <CustomButtom text="Bookmark"/>
      <Alert>Success!</Alert>
      <Alert type="error">Error!</Alert>
      <NewButton />
      <NameList />
      <ProductList />
      <UserDetails name="Bruce Wayne" isOnline={true} isPremium={true} isNewUser={true} role="admin"/>
      <UserDetails name="Clark Kent" isOnline={true} hideOffline={true} role="vip"/>
      <CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>brucew@email.com</p>
        <button>Edit profile</button>
      </CardWrapper>
      
      <Greeting name="Ramazon" message="Good morning"/>
      <Greeting name="Feruzbek"/>
      <Greeting message="Welcome"/>
      <Greeting/>

      <Product
        title="Banana"
        price={15}
        inStock={true}
        categories={["Fruits", "Fresh"]}
      />
      <Welcome name="Ramazon" alias="Batman" />
      <Welcome name="Feruzbek" alias="Spiderman" />
      <Welcome name="Kamol" alias="Shazam" />

      <CandidateProfile />
      <StyledForm />
      <ContactForm />
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <Welcome />
      <Button />
    </div>
  );
}

export default App;
