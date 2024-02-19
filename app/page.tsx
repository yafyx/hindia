"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Input,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { SearchIcon } from "@/components/icons";

export default function Home() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["All"]));
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col items-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        hindia lyrics searcher
      </p>
      <div className="w-[800px]">
        <Card className="p-3">
          <CardBody className="gap-3">
            <Input
              label="Search"
              isClearable
              radius="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="Type to search..."
              startContent={
                <SearchIcon className="pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
              }
            />
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="capitalize">
                  Filter by album: {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Multiple selection example"
                variant="flat"
                closeOnSelect={false}
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
              >
                <DropdownItem key="text">Text</DropdownItem>
                <DropdownItem key="number">Number</DropdownItem>
                <DropdownItem key="date">Date</DropdownItem>
                <DropdownItem key="single_date">Single Date</DropdownItem>
                <DropdownItem key="iteration">Iteration</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-center">
            <small className="text-default-500">
              Tip: you can use a * for wildcard search! Try rain*
            </small>
          </CardFooter>
        </Card>
        <Card className="mt-4 max-h-[800px] max-w-[800px] p-3">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-medium">Found 18 usages in 13 songs</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              nihil laboriosam aspernatur sed illum aperiam similique suscipit
              ipsam, repellat laudantium temporibus doloribus nostrum hic
              voluptatibus nemo impedit. Error animi beatae tenetur, enim
              debitis quaerat quam quia fugit modi porro earum voluptatibus
              cupiditate alias praesentium. Repellat iste incidunt voluptatem
              distinctio odit ipsa labore cumque consequuntur totam alias
              mollitia aliquam non corporis obcaecati eius eveniet reprehenderit
              recusandae iusto officia modi architecto, enim, optio vitae
              officiis. Tempora natus perspiciatis magnam dolores sequi, omnis
              expedita modi nulla distinctio? Deleniti sint adipisci sapiente
              culpa laborum enim rem nobis molestiae veniam quia quo ipsum sit
              repellat labore, esse temporibus tempora exercitationem totam
              quasi tenetur consectetur. Et quia dicta numquam minus voluptatem
              veniam ab facilis ipsum iusto architecto cupiditate error, officia
              repellendus deserunt nulla dolorum labore iste modi! Accusantium
              odio dolore nemo corporis voluptatum! Ipsa aliquam nam repellat
              laudantium velit hic incidunt delectus vel quidem, reprehenderit
              sunt reiciendis perspiciatis molestiae repellendus, mollitia
              consectetur consequuntur? Expedita, atque inventore. Sunt vel eos
              eum consectetur perferendis cum similique repellendus dolore
              delectus ea laboriosam tempore qui ut soluta velit fugiat ratione
              doloremque sed dicta facere, id accusantium? Dolorem sed earum
              quia enim nemo, tempora expedita totam consequuntur vel beatae eos
              cupiditate fugiat, accusamus id facilis maxime impedit natus vitae
              vero molestiae quisquam obcaecati. Dolorem, non. Velit quos cum
              quo eius reprehenderit adipisci eveniet dolorem natus eaque. Odio
              iste esse assumenda soluta nihil dicta libero at et, quod eos amet
              ex delectus alias nam veritatis mollitia qui eum neque corrupti
              est enim. Quae modi qui voluptatem omnis. Soluta quidem distinctio
              minima pariatur magni! Numquam sunt earum repellendus, assumenda
              eius voluptatibus voluptatum sequi dignissimos voluptatem,
              molestias impedit excepturi quaerat! Vel aut, fuga consequatur
              optio incidunt ex corporis ducimus dicta placeat autem temporibus
              dolorum accusamus nulla cumque unde nihil ut, cupiditate
              consequuntur nisi nostrum praesentium? Omnis hic sapiente fugiat
              eligendi, quia numquam in atque nobis molestias quaerat sed,
              excepturi pariatur voluptate perferendis dolore. Provident officia
              consequuntur odit necessitatibus eligendi voluptate consectetur,
              unde iure alias animi, quia minima repellat sed temporibus natus
              neque magni esse ratione corporis odio dolore sit. Accusamus
              corporis sapiente commodi atque quod consectetur reprehenderit
              odit suscipit earum. Illo, architecto alias nisi sed expedita iste
              dolore soluta dolor eius, error maiores temporibus, nulla
              laboriosam corrupti deleniti doloremque consequatur voluptatem
              aperiam porro! Maxime consectetur vero neque, architecto debitis
              sunt est voluptas ab adipisci, deserunt natus veniam unde
              voluptatibus. Odit facilis adipisci officiis amet error nemo eum
              delectus iusto ipsum sunt maxime nulla recusandae quas, corrupti,
              nihil illo placeat neque rem ab quos dolorum, repellendus maiores.
              Deserunt, ipsam iusto alias repellendus earum, eveniet consequatur
              voluptatem sunt sed numquam vitae. Blanditiis ex incidunt labore
              animi ipsum laboriosam nam exercitationem recusandae! Quam hic
              officiis aspernatur mollitia eius voluptates non labore minima
              ratione harum repellendus odio, ipsam molestias. Cum sequi et
              nihil perspiciatis! Quas voluptas, aspernatur ab ducimus quia
              maxime provident magni quaerat excepturi ipsam harum soluta quod
              natus in vitae similique mollitia doloremque, distinctio nostrum
              blanditiis eos? Omnis, reiciendis sapiente molestias adipisci
              tempora deserunt, doloremque, nesciunt enim culpa esse illo vitae
              perspiciatis. Veritatis nihil dolore placeat eligendi incidunt
              excepturi fuga explicabo eveniet ipsa! Consequuntur nobis
              voluptate magnam voluptatibus blanditiis a. Ut maiores cupiditate
              ab iure eos excepturi. Odit excepturi deserunt alias nemo officia
              atque inventore quam voluptate obcaecati. Quam quae sequi,
              recusandae et expedita, libero illo nulla minima voluptatem
              distinctio sint illum, impedit iure dolor sed totam enim omnis
              sapiente quidem culpa iusto voluptates? Dolorum vel obcaecati
              veniam eligendi? Impedit eaque nostrum, aperiam quo perferendis
              illo obcaecati voluptatum dolore ipsa rem earum ad labore modi
              facere facilis enim accusantium illum possimus optio aliquid quia
              deleniti quod quaerat. Optio possimus recusandae unde vero
              voluptate perspiciatis, laudantium expedita eos quod, a ipsam
              laborum aspernatur magni ad debitis explicabo dolor commodi libero
              necessitatibus. Vero dolorum error porro fugiat placeat ipsa,
              omnis recusandae obcaecati atque impedit accusantium minus odio
              architecto ex pariatur consectetur illo alias. Rem illo fugiat,
              quas saepe culpa, et reiciendis a, consectetur dolorum eum
              doloremque nulla soluta praesentium quisquam commodi. Eos labore
              voluptatem blanditiis quisquam quidem error consequuntur. Nulla
              dolores dicta voluptatem voluptas accusantium ex sed pariatur
              aspernatur rem, quas amet inventore quos distinctio dolorum! Nobis
              sunt in voluptatem itaque iste culpa facere alias reiciendis,
              eveniet illo iusto a vitae nihil optio nulla laborum! Adipisci
              aperiam saepe eaque obcaecati quibusdam consequatur, fugiat fugit
              a tenetur eum quaerat, sapiente animi maxime! Magni maiores sit
              nam voluptate, optio modi maxime est architecto unde sapiente,
              asperiores quasi at error amet velit provident vel ad assumenda
              esse ratione quidem. Porro voluptatibus vero dolorum reiciendis
              repellat? Officia consequatur ipsa laborum veniam quisquam
              corrupti temporibus porro consequuntur assumenda dolorem officiis
              at perferendis tenetur, consectetur quasi quod autem aspernatur
              voluptatibus ab earum ratione excepturi. Laborum a explicabo saepe
              porro sunt eos quos. In impedit itaque voluptates adipisci
              voluptatum nulla, ut incidunt blanditiis soluta deleniti at hic id
              laboriosam reprehenderit dolore, fugiat alias. Illum quidem
              corrupti aspernatur molestias labore minus recusandae eum non modi
              soluta dolorum at necessitatibus sit quaerat fuga possimus vel,
              totam tempora quas quis ratione repudiandae. Itaque quas
              blanditiis ea assumenda nisi quis quos quae. Accusamus doloremque
              quasi, harum adipisci voluptatem earum error necessitatibus
              dolorem maiores commodi sint sit, deserunt sapiente tenetur, in
              obcaecati possimus delectus dolores modi aut alias consectetur?
              Porro quis, architecto praesentium numquam repellat quisquam optio
              officiis! Sequi itaque blanditiis perferendis quod sapiente earum
              qui impedit eveniet modi ratione. Tenetur doloribus nemo amet
              libero. Sunt possimus quas laudantium fuga numquam animi ut
              similique, laborum itaque deleniti nostrum doloremque sint. Optio
              fugiat deserunt, dolor officia pariatur, aliquam atque vitae, enim
              vel aspernatur consequatur facere? Aliquid laborum quibusdam
              libero blanditiis perferendis similique beatae, officiis cum
              assumenda qui esse, illum nam quae minus reiciendis corrupti aut
              atque aspernatur. Laboriosam nam consectetur ab temporibus
              possimus facere, recusandae sunt modi delectus exercitationem
              error rem nulla nisi quae corporis quidem aliquam accusantium
              doloremque, quod illo repudiandae unde porro? Numquam excepturi
              quasi iste mollitia. Quis quo pariatur sequi provident explicabo,
              atque, tempora animi maxime, fuga magnam perspiciatis
              consequuntur. Quaerat, exercitationem in aperiam laboriosam
              debitis suscipit tempore.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
