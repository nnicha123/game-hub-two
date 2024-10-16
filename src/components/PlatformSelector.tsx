import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
