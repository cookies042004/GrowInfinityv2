import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import PlaceIcon from "@mui/icons-material/Place";

import ReactPlayer from "react-player";

import gallery1 from "../../assets/img/gallery1.png";
import gallery2 from "../../assets/img/gallery2.png";
import gallery3 from "../../assets/img/gallery3.png";

import flatamenity1 from "../../assets/img/gas-stove.png";
import flatamenity2 from "../../assets/img/dish-washer.png";
import flatamenity3 from "../../assets/img/air-conditioner.png";

import location1 from "../../assets/img/subway.png";
import location2 from "../../assets/img/hospital.png";
import location3 from "../../assets/img/market.png";
import location4 from "../../assets/img/atm-machine.png";
import location5 from "../../assets/img/school.png";
import location6 from "../../assets/img/airport.png";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DownloadIcon from "@mui/icons-material/Download";

import "./ProjectDetails.css";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import Carousel from "../../components/Carousel";

export const ProjectDetails = () => {
  const { id } = useParams();
  const apiUrl = `${process.env.BASE_URL}/api/v1/property/${id}`;

  const { data, loading, error, refetch } = useFetchData(apiUrl);

  const property = data.property;

  const [expandtext, setExpandText] = useState(false);
  return (
    <Layout>
      {/* Project Details Hero  */}
      <div className="detailsbanner flex items-center lg:ps-24">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center lg:col-span-6 lg:text-left">
            <h1 className="font-dmsans font-medium text-white text-5xl lg:text-[76.76px]">
              Property Details
            </h1>
            <p className="font-dmsans font-normal text-white text-xl py-4  lg:text-[22.39px] px-5 lg:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>

      {property && (
        <div className="bg-[#eeeeee] grid sm:grid-cols-12">
          <div className="col-span-8 m-5">
            <div className="bg-white p-10">
              <h1 className="font-bold text-4xl font-dmsans">
                {property.name}
              </h1>
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <PlaceIcon />
                  <h3 className="py-5 text-xl">{property.city}</h3>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-[#15123c]">
                    1 Cr Onwards*
                  </h3>
                </div>
              </div>

              <Carousel galleryImages={property.propertyImages} />

              <div className="bg-[#15123c] text-white my-5 rounded-xl">
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3 flex flex-col gap-3 items-center border-r-2 border-white m-5">
                    <h3 className="text-xl font-semibold uppercase">
                      Unit Type
                    </h3>
                    <p className="text-lg">3 BHK</p>
                  </div>
                  <div className="col-span-3 flex flex-col gap-3 items-center border-r-2 border-white m-5">
                    <h3 className="text-xl font-semibold uppercase">Area</h3>
                    <p className="text-lg">1100 sqft</p>
                  </div>
                  <div className="col-span-3 flex flex-col gap-3 items-center border-r-2 border-white m-5">
                    <h3 className="text-xl font-semibold uppercase">Furnish</h3>
                    <p className="text-lg">{property.furnishType}</p>
                  </div>
                  <div className="col-span-3 flex flex-col gap-3 items-center m-5">
                    <h3 className="text-xl font-semibold uppercase">Status</h3>
                    <p className="text-lg">{property.constructionStatus}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="description">
                <h1 className="py-5 text-2xl font-semibold text-[#1b1364] font-dmsans">
                  Description
                </h1>
                <p className="text-justify font-dmsans leading-8">
                  {property.description}{" "}
                  <span className={expandtext ? "" : "hidden"}>
                    Illo autem ullam aliquam ut voluptas sed similique nihil
                    inventore! Culpa deserunt sed aliquam quaerat fugiat cumque
                    quasi? Minima in, autem eos nesciunt consequuntur, expedita
                    deleniti alias adipisci hic culpa animi itaque aliquam earum
                    corrupti pariatur libero voluptas totam officia magnam
                    consectetur eum a harum sed? Atque quos expedita incidunt,
                    saepe, molestias iusto corrupti obcaecati enim esse quod
                    veniam et laborum corporis maxime dolores cum voluptatum
                    repudiandae nostrum quasi eius amet! Nulla vitae quis sequi
                    iure deserunt odit neque quaerat, necessitatibus, libero
                    quibusdam reiciendis illo maxime tempora ipsa dolorem rerum
                    ad tenetur hic, provident voluptate? Dolores porro doloribus
                    illo earum rerum dolorum voluptatibus nesciunt, sit odio
                    itaque recusandae provident vitae eligendi eius dolore quia
                    eum nihil incidunt numquam? Omnis delectus adipisci sunt
                    quae esse fugiat tempora? Ex, quod quaerat facere
                    consequatur quae adipisci impedit vitae soluta asperiores et
                    dolorem rerum fuga, mollitia eum ipsa odio repellendus qui
                    atque ducimus magnam minus. Qui repudiandae incidunt nam
                    modi commodi impedit ex cupiditate consequatur consequuntur
                    temporibus architecto eligendi, sit suscipit asperiores
                    repellat porro, ipsa quo ad pariatur in perspiciatis dolores
                    excepturi vero mollitia? Beatae deleniti delectus ut eos
                    quos distinctio, quidem impedit modi quia asperiores soluta
                    esse doloremque tempora placeat, quisquam minus voluptatem
                    libero illum laborum ipsam exercitationem dignissimos?
                    Doloribus similique velit nisi vero veniam.
                  </span>
                  <a
                    onClick={() => setExpandText(!expandtext)}
                    className="font-bold text-[#4a40d0] hover:cursor-pointer"
                  >
                    {expandtext ? "Read less" : "Read more"}
                  </a>
                </p>
              </div>

              {/* Parking and pricing  */}
              <div className="parking pricing">
                <h1 className="py-5 text-2xl font-semibold text-[#1b1364] font-dmsans">
                  Parking and Pricing
                </h1>
                <div>
                  <ul className="flex justify-around">
                    <li className="text-lg">
                      <strong>Parking: </strong>1
                    </li>
                    <li className="text-lg">
                      <strong>Property Type: </strong>Sale
                    </li>
                    <li className="text-lg">
                      <strong>Parking: </strong>1
                    </li>
                  </ul>
                </div>
              </div>

              {/* Amenities  */}
              <div className="amenities">
                <div className="society-amenities">
                  <h1 className="py-5 text-2xl font-semibold text-[#1b1364] font-dmsans">
                    Society Amenity
                  </h1>

                  <div className="grid sm:grid-cols-12">
                    {property.amenities
                      .filter((amenity) => amenity.type == "society_amenity")
                      .map((amenity, index) => {
                        return (
                          <div key={index} className="col-span-3 my-8">
                            <div className="flex items-center justify-center gap-3">
                              <img
                                src={`${process.env.BASE_URL}/${amenity.image}`}
                                alt=""
                                height={40}
                                width={25}
                              />
                              <span className="text-lg">{amenity.name}</span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="flat-amenities">
                  <h1 className="py-5 text-2xl font-semibold text-[#1b1364] font-dmsans">
                    Flat Amenity
                  </h1>

                  <div className="grid sm:grid-cols-12">
                    {property.amenities
                      .filter((amenity) => amenity.type == "flat_amenity")
                      .map((amenity, index) => {
                        return (
                          <div key={index} className="col-span-3 my-8">
                            <div className="flex items-center justify-center gap-3">
                              <img
                                src={`${process.env.BASE_URL}/${amenity.image}`}
                                alt=""
                                height={40}
                                width={25}
                              />
                              <span className="text-lg">{amenity.name}</span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="location-advantages">
                  <h1 className="py-5 text-2xl font-semibold text-[#1b1364] font-dmsans">
                    Location Advantages
                  </h1>

                  <div className="grid sm:grid-cols-12">
                    {property.amenities
                      .filter(
                        (amenity) => amenity.type == "location_advantages"
                      )
                      .map((amenity, index) => {
                        return (
                          <div key={index} className="col-span-3 my-8">
                            <div className="flex items-center justify-center gap-3">
                              <img
                                src={`${process.env.BASE_URL}${amenity.image}`}
                                alt=""
                                height={40}
                                width={25}
                              />
                              <span className="text-lg">{amenity.name}</span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>

              {/* Address  */}
              <div className="address">
                <h1 className="py-5 text-2xl font-semibold font-dmsans text-[#1b1364]">
                  Address
                </h1>

                <div>
                  <ul className="font-dmsans flex flex-col gap-3">
                    <li>
                      <strong className="text-lg ">Address: </strong>
                      {property.address}
                    </li>
                    <li>
                      <strong className="text-lg ">City: </strong>
                      {property.city}
                    </li>
                    <li>
                      <strong className="text-lg ">State: </strong>
                      {property.state}
                    </li>
                    <li>
                      <strong className="text-lg ">Pincode: </strong>
                      {property.pincode}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Youtube Video  */}
              <div className="youtube-video flex justify-center my-10">
                <ReactPlayer
                  controls={true}
                  width="80%"
                  height="500px"
                  url={"https://www.youtube.com/watch?v=KvpInChjMq0"}
                />
              </div>

              <div className="flex justify-around">
                <Button
                  variant="outlined"
                  size="large"
                  color="error"
                  startIcon={<DownloadIcon />}
                >
                  Download Brochure
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="success"
                  startIcon={<WhatsAppIcon />}
                >
                  Get Details on Whatsapp
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-4 ms-0 m-5">
            <div className="bg-white p-5 rounded">
              <h4 className="text-[#15123c] text-2xl font-bold">
                Price on Request
              </h4>
              <div className="flex flex-col gap-4 my-4">
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-[#15123c] text-2xl font-bold">
                Recent Properties
              </h4>
              <div className="flex flex-col gap-4 my-4">
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-3">
                    <img
                      src={gallery1}
                      alt=""
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold font-dmsans text-[#15123c]">
                        Tata Eureka Park
                      </h5>
                      <p>10/8/2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
