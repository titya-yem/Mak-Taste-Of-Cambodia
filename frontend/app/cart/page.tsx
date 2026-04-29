import { Box, Container } from "@radix-ui/themes"


const page = () => {
  return (
    <main className="py-15 md:py-20 p-4 bg-[#F7F3ED]">
      <Container>
        <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* selected product */}
          <Box>
          </Box>

          {/* order summary */}
          <Box className="hidden lg:block">
            <h5 className="text-xl font-bold">Summary</h5>
          </Box>
        </div>
      </Container>
    </main>
  )
}

export default page
