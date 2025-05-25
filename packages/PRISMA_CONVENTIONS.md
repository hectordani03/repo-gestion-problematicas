# Prisma Modeling Conventions

> [!WARNING]
> DO NOT BREAK THESE RULES – The API and Admin Panel depend on them.

These conventions ensure structural consistency between the Prisma schema, the PostgreSQL database, and the dynamic UI/admin panel. Violating them can cause serious runtime errors, introspection issues, and unexpected query behavior.

## Rules

### 1. Model Names

- Use **Pascal_Snake_Case** and keep them **singular**.
- ✅ Good: `User`, `Project_Type`
- ❌ Bad: `users`, `user_status`, `ProjectTypes`

### 2. Table Mapping

- Each model must explicitly map to a **Pascal_Snake_Case (Plural)** table using `@@map()`.
- ✅ Good: `@@map("Users")`, `@@map("User_Statuses")`
- ❌ Bad: `@@map("users")`, `@@map("userStatuses")`

### 3. Field Names

- All Prisma field names must use **camelCase**.
- If the corresponding column in the database is in `camelCase`, use `@map()` to explicitly define the mapping as `snake_case`.

```prisma
middleName String? @map("middle_name")
userStatusId Int?  @map("user_status_id")
```

### 4. Required Timestamp Fields

All models **must include** the following fields:

```prisma
createdAt DateTime @default(now()) @map("created_at")
updatedAt DateTime @updatedAt @map("updated_at")
```

This guarantees consistent auditing and chronological ordering.

### 5. Full English Naming

- Always use full, readable English terms for both models and fields.
- ✅ Good: `firstName`, `applicationStatus`, `createdAt`
- ❌ Bad: `fName`, `appStat`, `crtAt`

### 6. Foreign Key Naming

- Use `camelCase` for Prisma field names.
- Map to a `snake_case` column name.
- Include a corresponding `@relation` block.

```prisma
userStatusId Int?         @map("user_status_id")
userStatus   User_Status? @relation(fields: [userStatusId], references: [user_status_id])
```

### 7. Consistent Foreign Key Field Naming

- Foreign key fields must follow a consistent naming pattern.
- Use `camelCase` for Prisma field names and map them to `snake_case` column names in the database.

```prisma
projectTypeId Int?          @map("project_type_id")
projectType   Project_Type? @relation(fields: [projectTypeId], references: [project_type_id])
```

### 8. Primary Key Naming Rules

- Primary keys must adhere to the following naming conventions:
  - For incremental IDs, use `modelname_id`.
  - For UUIDs, use `uuid_modelname`.

```prisma
project_id   Int      @id @default(autoincrement())
// ...
uuid_project String   @id @default(uuid())
```

## Why These Rules Exist

These conventions support:

- Dynamic table/field mapping logic
- Schema introspection for tooling and admin UIs
- Prevention of bugs caused by naming mismatches
- Cleaner versioning and migration workflows

> [!IMPORTANT]
> Follow these rules for every new model and field added. If unsure, **ask the team before merging.**
