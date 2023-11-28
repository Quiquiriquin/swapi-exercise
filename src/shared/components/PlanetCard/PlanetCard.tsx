import { memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faEarthAmerica,
  faPerson,
  faPersonFalling,
  faTemperatureHalf,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { formatNumbers, formatStrings } from "../../../utils/utils";
import clsx from "clsx";
import { GET_FILM } from "../../../endpoints/Films.endpoints";
import { GET_RESIDENT } from "../../../endpoints/Residents.endpoints";
import ListItem from "../ListItem/ListItem";
export type PlanetProps = {
  climate: string;
  created: Date;
  diameter: number;
  edited: Date;
  films: string[];
  gravity: number;
  name: string;
  orbital_period: number;
  population: number;
  residents: string[];
  rotation_period: number;
  surface_water: number;
  terrain: string;
  url: string;
};

type ItemType = {
  icon: any;
  helper?: string;
  label: string;
  value: string;
};
const PlanetCard = memo(({ name, ...args }: PlanetProps) => {
  const [localArgs]: any = useState<any>({
    ...args,
  });
  const [flipped, setFlipped] = useState<boolean>(false);

  const elementsToRender: ItemType[] = [
    {
      icon: faTemperatureHalf,
      helper: "strings",
      label: "Climate",
      value: "climate",
    },
    {
      icon: faEarthAmerica,
      helper: "number",
      label: "Diameter",
      value: "diameter",
    },
    {
      icon: faPersonFalling,
      label: "Gravity",
      value: "gravity",
    },
    {
      icon: faPerson,
      helper: "number",
      label: "Population",
      value: "population",
    },
    {
      icon: faWater,
      helper: "number",
      label: "Surface water",
      value: "surface_water",
    },
    {
      icon: faArrowsRotate,
      helper: "number",
      label: "Orbital period",
      value: "orbital_period",
    },
  ];

  const fetchImage = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className={clsx("planet-card", flipped ? "flipped" : "")}>
      <div className="inner--front">
        <div className="planet-card--header">
          <h1 className="font-bold">{name}</h1>
        </div>
        <div className="planet-card--info">
          {elementsToRender?.map(
            ({ icon, helper, label, value = "" }: ItemType) => (
              <div className="planet-card--prop flex flex-gap-4 items-center">
                <div
                  className="flex justify-center"
                  style={{ width: "24px", height: "24px" }}
                >
                  <FontAwesomeIcon icon={icon} size="xl" />
                </div>
                <div className="text-left ml-2">
                  <label className="text-xs block">{label}</label>
                  <label className="font-bold block">
                    {helper
                      ? helper === "strings"
                        ? formatStrings(localArgs[value] || "")
                        : formatNumbers(localArgs[value])
                      : localArgs[value]}
                  </label>
                </div>
              </div>
            )
          )}
        </div>
        <div className="planet-card--image">
          <button onClick={fetchImage} className="image-button">
            See more
          </button>
        </div>
      </div>
      <div className="inner--back">
        <div className="flex flex-col half-section">
          <label className="block text-lg font-bold">Films</label>
          <div className="text-left">
            {flipped &&
              localArgs["films"].map((film: string) => (
                <ListItem
                  secId="film"
                  queryMethod={GET_FILM}
                  key={film}
                  id={film.split("/")[film.split("/").length - 2]}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col half-section">
          <label className="block text-lg font-bold">Residents</label>
          {localArgs["residents"]?.length === 0 ? (
            <div className="mt-4">Unknown residents</div>
          ) : (
            <div className="text-left">
              {flipped &&
                localArgs["residents"].map((resident: string) => (
                  <ListItem
                    secId="people"
                    queryMethod={GET_RESIDENT}
                    key={resident}
                    id={resident.split("/")[resident.split("/").length - 2]}
                  />
                ))}
            </div>
          )}
        </div>
        <button onClick={fetchImage} className="image-button">
          See less
        </button>
      </div>
    </div>
  );
});

export default PlanetCard;
