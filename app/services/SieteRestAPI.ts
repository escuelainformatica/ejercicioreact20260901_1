import type { SieteRest } from "../models/interfaces";

export default function LeerSieteRestAPI(): Promise<SieteRest> {
  return fetch("https://gist.githubusercontent.com/jorgecc/880b1a06358b841e695426fce045adc0/raw/2fe4176721c064ba5e30424f778d2bb95e5b1626/gistfile1.txt")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: SieteRest) => {
      return data;
    });
}