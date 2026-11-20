import { Chip, Stack } from "@mui/material";

export default function TechList({ items }) {
  if (!items.length) return null;

  return (
    <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1} sx={{ mt: 2 }}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          size="small"
          variant="outlined"
          sx={{ bgcolor: "secondary.light", border: 0, color: "primary.main" }}
        />
      ))}
    </Stack>
  );
}
