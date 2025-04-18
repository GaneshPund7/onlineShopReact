// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// import { Button } from "@/components/ui/button"
// import { Mail, MapPin, Phone } from "lucide-react"
// import { FloatingDock } from "@/components/ui/floating-dock"
// import { icons } from "@/config/ContactData"
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

// const contactSchema = z.object({
//   name: z
//     .string()
//     .trim()
//     .min(1, "Name is required")
//     .regex(/^[a-zA-Z0-9 _-]+$/, "Only letters, numbers, - and _ allowed"),
//   email: z
//     .string()
//     .trim()
//     .min(1, "Email is required")
//     .email("Invalid email address"),
//   message: z
//     .string()
//     .trim()
//     .min(1, "Message is required")
//     .regex(/^[a-zA-Z0-9 _-]+$/, "Only letters, numbers, - and _ allowed"),
// })

// export type contactForm = z.infer<typeof contactSchema>

// const Contact = () => {
//   const form = useForm<contactForm>({
//     resolver: zodResolver(contactSchema),
//   })

//   return (
//     <div className="flex justify-center items-center p-4 md:p-10 h-auto w-full">
//       <div className="shadow-2xl w-full sm:w-[100%] md:w-[100%] lg:w-[80%] h-auto flex flex-col md:flex-row lg:flex-row justify-between mt-20 rounded-xl p-8">
//         {/* Left Section - Form */}
//         <div className="w-full lg:w-[50%] p-0 md:p-4">
//           <h1 className="text-3xl font-bold text-blue-600">Contact Us</h1>
//           <p className="line-clamp-2 mt-4 text-sm font-semibold text-slate-700">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit labore
//             animi dolor ipsum rem quos iusto beatae aperiam, voluptatibus ut,
//             reiciendis mollitia ratione, minus atque saepe provident nobis unde?
//             A.
//           </p>
//           <div className="mt-4">
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit((data) => console.log(data))}>
//                 <div className="mb-4">
//                   <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Name</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Your Name"
//                             {...field}
//                             type="text"
//                             style={{
//                               border: "none",
//                               outline: "none",
//                               boxShadow: "none",
//                             }}
//                             className="focus:outline-none bg-slate-200 rounded-full"
//                           />
//                         </FormControl>
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Your Email"
//                             type="email"
//                             {...field}
//                             style={{
//                               outline: "none",
//                               boxShadow: "none",
//                             }}
//                             className="focus:outline-none rounded-full bg-slate-200"
//                           />
//                         </FormControl>
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <FormField
//                     control={form.control}
//                     name="message"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Message</FormLabel>
//                         <FormControl>
//                           <Textarea
//                             {...field}
//                             placeholder="Your Message"
//                             style={{
//                               outline: "none",
//                               boxShadow: "none",
//                             }}
//                             className="focus:outline-none shadow-xl rounded-xl bg-slate-200"
//                           />
//                         </FormControl>
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full mt-5 md:mt-5 lg:mt-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium py-2 hover:from-blue-700 hover:to-blue-500 transition-all  hover:scale-105 rounded-full"
//                 >
//                   Send Message
//                 </Button>
//               </form>
//             </Form>
//           </div>
//         </div>

//         <div className="p-4 flex flex-col justify-center items-center gap-10 w-full mt-11 md:mt-0 md:w-[50%] lg:w-[50%]">
//           <img
//             // src="https://img.freepik.com/free-vector/infographic-social-media-icons_1045-609.jpg?t=st=1734964781~exp=1734968381~hmac=0794d4cbf94247e2e2ab76675ca31e46eada5acae8e7b29b4759a43436467392&w=826"
//             src="https://img.freepik.com/free-vector/social-media-manager-concept-illustration_114360-23821.jpg?t=st=1735232557~exp=1735236157~hmac=c19e9210169a761ed65bd2ef7330e090448921680edd53b3c6f9371c85288f27&w=740"
//             alt="Social Media Icons"
//             className="w-[60%] md:w-[50%] lg:w-[50%] mx-auto"
//           />
//           <div className="flex flex-col gap-6">
//             <div className="flex items-center space-x-3">
//               <span className="text-sm">
//                 <Phone size={18} />
//               </span>
//               <span className="text-[1.1rem]">+1 (234) 567-890</span>
//             </div>

//             <div className="flex items-center space-x-3">
//               <span className="text-sm">
//                 <Mail size={18} />
//               </span>
//               <span className="text-[1.1rem]">example@example.com</span>
//             </div>

//             <div className="flex items-center space-x-3">
//               <span className="text-sm">
//                 <MapPin size={18} />
//               </span>
//               <span className="text-[1.1rem]">123 Main St, City, Country</span>
//             </div>
//           </div>
//           <div className="">
//             <FloatingDock
//               items={icons}
//               desktopClassName="text-xl"
//               mobileClassName="text-md"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact
