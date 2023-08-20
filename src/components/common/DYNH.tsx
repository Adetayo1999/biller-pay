import Container from "../skeleton/container/Container";
import Cards from "@/assets/images/crypto.png";
import Image from "next/image";
import Button from "../form/Buttons/Button";

const DYNH = () => {
  return (
    <div className="linear-bg  grid justify-items-center mt-[5.625rem] py-16  w-full">
      <Container>
        <div className="flex w-full flex-col md:flex-row  items-center justify-between gap-4 md:gap-6 ">
          <div className="flex-1 ">
            <h3 className="  font-semibold md:text-[4.875rem] font-grotesk text-yellow text-[2.3rem] md:leading-[6rem] ">
              Convert all cryptos to cash. 🤑
            </h3>
            <p className="md:text-[1.438rem] my-6 md:my-10">
              See step-by-step process on how fastly you
              <br className="hidden md:inline" />
              can cashout your coins at billerpay
            </p>
            <Button
              btnTitle="Learn More"
              borderRadius="rounded-full"
              width="w-full md:w-[12.5rem]"
              bgColor="bg-yellow"
              textStyle="font-semibold"
              // onClick={() => router.push("/products/redeem_voucher")}
            />
          </div>
          <div className="flex justify-center">
            <Image src={Cards} alt="img" width={500} />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default DYNH;
