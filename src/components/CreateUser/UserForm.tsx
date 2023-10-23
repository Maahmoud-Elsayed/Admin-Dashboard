import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Box, Button, Stack, TextField, useTheme, Paper } from "@mui/material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
};

const UserForm = () => {
  const theme = useTheme();
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const UserSchema = z.object({
    firstName: z.string().trim().nonempty({ message: "required" }),
    lastName: z.string().trim().nonempty({ message: "required" }),
    email: z
      .string()
      .trim()
      .nonempty({ message: "required" })
      .email({ message: "invalid email" }),
    contact: z
      .string()
      .trim()
      .regex(phoneRegExp, { message: "Phone number is not valid" })
      .nonempty("required"),
    address1: z.string().trim().nonempty({ message: "required" }),
    address2: z.string().trim().nonempty({ message: "required" }),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address1: "",
      address2: "",
    },
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Paper sx={{p:"25px",mt:"40px"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Stack spacing={4} direction={{ xs: "column", md: "row" }}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  InputLabelProps={{
                    sx: { color: "inherit" },
                  }}
                  color={
                    theme.palette.mode === "dark" ? "secondary" : "primary"
                  }
                  variant="filled"
                  fullWidth
                  label="First Name"
                  type="text"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  InputLabelProps={{
                    sx: { color: "inherit" },
                  }}
                  color={
                    theme.palette.mode === "dark" ? "secondary" : "primary"
                  }
                  variant="filled"
                  fullWidth
                  label="Last Name"
                  type="text"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  {...field}
                />
              )}
            />
          </Stack>
          <Stack spacing={4}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  InputLabelProps={{
                    sx: { color: "inherit" },
                  }}
                  color={
                    theme.palette.mode === "dark" ? "secondary" : "primary"
                  }
                  variant="filled"
                  fullWidth
                  label="Email"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="contact"
              control={control}
              render={({ field }) => (
                <TextField
                  InputLabelProps={{
                    sx: { color: "inherit" },
                  }}
                  color={
                    theme.palette.mode === "dark" ? "secondary" : "primary"
                  }
                  variant="filled"
                  fullWidth
                  label="Contact Number"
                  type="number"
                  error={!!errors.contact}
                  helperText={errors.contact?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="address1"
              control={control}
              render={({ field }) => (
                <TextField
                  InputLabelProps={{
                    sx: { color: "inherit" },
                  }}
                  color={
                    theme.palette.mode === "dark" ? "secondary" : "primary"
                  }
                  variant="filled"
                  fullWidth
                  label="Address 1"
                  type="text"
                  error={!!errors.address1}
                  helperText={errors.address1?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="address2"
              control={control}
              render={({ field }) => (
                <TextField
                  InputLabelProps={{
                    sx: { color: "inherit" },
                  }}
                  color={
                    theme.palette.mode === "dark" ? "secondary" : "primary"
                  }
                  variant="filled"
                  fullWidth
                  label="Address 2"
                  type="text"
                  error={!!errors.address2}
                  helperText={errors.address2?.message}
                  {...field}
                />
              )}
            />
          </Stack>
          <Box display="flex" justifyContent="end">
            <Button
              sx={{ background: theme.palette.gradient }}
              type="submit"
              variant="contained"
            >
              Create New User
            </Button>
          </Box>
        </Stack>
      </form>
    </Paper>
  );
};

export default UserForm;
