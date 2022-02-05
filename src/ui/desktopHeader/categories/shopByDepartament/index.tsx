import { useCallback, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { departaments } from "../../../../config/departaments";
import { Container, Departaments, MainHeader } from "./style";

export function ShopByDepartament() {
  const [isDepartamentVisible, setIsDepartamentVisible] = useState(false);

  const handleSetDepartamentVisible = useCallback(async() => {
      setIsDepartamentVisible(true);
  }, [ setIsDepartamentVisible]);

  const handleHiddenDepartament = useCallback(async() => {
    setIsDepartamentVisible(false);
}, [ setIsDepartamentVisible]);

  return (
    <Container
        onMouseLeave={handleHiddenDepartament}
    >
      <MainHeader 
        onMouseOver={handleSetDepartamentVisible}
      >
        <hr />
        <div>
          <FiMenu />
          Departamentos
        </div>
      </MainHeader>
      {isDepartamentVisible && (
        <Departaments>
          {departaments.map((departament) => (
            <a
                href="/"
                key={Math.random()}
            >
                {departament.name}
            </a>
          ))}
        </Departaments>
      )}
    </Container>
  );
}
