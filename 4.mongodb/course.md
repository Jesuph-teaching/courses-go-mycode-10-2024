### MongoDB Introductions

### **Part 1: Basic CRUD Operations**

#### **1. Create: Inserting Documents**

Documents are added to collections using `insertOne()` or `insertMany()`.

**Example 1: Insert a single car**

```javascript
db.cars.insertOne({
	brand: "Toyota",
	model: "Corolla",
	year: 2020,
	features: ["Air Conditioning", "Bluetooth", "Backup Camera"],
});
```

**Example 2: Insert multiple cars**

```javascript
db.cars.insertMany([
	{ brand: "Ford", model: "Mustang", year: 2021, features: ["Cruise Control", "Navigation"] },
	{ brand: "Tesla", model: "Model 3", year: 2023, features: ["Autopilot", "Electric"] },
]);
```

Use `show collections` to verify the collection exists.

#### **2. Read: Querying Documents**

Retrieve documents from a collection using `find()`.

**Example 1: Retrieve all cars**

```javascript
db.cars.find();
```

**Example 2: Query with conditions**

```javascript
db.cars.find({ year: { $gte: 2020 } }); // Find cars from 2020 or newer
```

**Example 3: Projection**

Specify fields to include/exclude:

```javascript
db.cars.find({}, { brand: 1, model: 1, _id: 0 }); // Only show brand and model
```

#### **3. Update: Modifying Documents**

Update documents with `updateOne()`, `updateMany()`, or `replaceOne()`.

**Example 1: Update a single car**

```javascript
db.cars.updateOne({ model: "Corolla" }, { $set: { year: 2021 } });
```

**Example 2: Update multiple cars**

```javascript
db.cars.updateMany({ year: { $lt: 2020 } }, { $set: { status: "Outdated" } });
```

#### **4. Delete: Removing Documents**

Remove documents using `deleteOne()` or `deleteMany()`.

**Example 1: Delete a single car**

```javascript
db.cars.deleteOne({ model: "Mustang" });
```

**Example 2: Delete multiple cars**

```javascript
db.cars.deleteMany({ year: { $lt: 2015 } });
```

---

### **Part 2: Aggregation and Indexing**

#### **Aggregation Framework**

The aggregation framework processes data through a pipeline of stages, such as `$match`, `$group`, and `$project`.

**Example: Group cars by year and count**

```javascript
db.cars.aggregate([{ $match: { features: "Bluetooth" } }, { $group: { _id: "$year", total: { $sum: 1 } } }]);
```

**Stages Explained:**

-   `$match`: Filters documents.
-   `$group`: Groups documents by a specified field.
-   `$project`: Selects specific fields to include in the result.

#### **Indexing**

Indexes improve query performance. Create indexes using `createIndex()`.

**Example: Create an index on the `brand` field**

```javascript
db.cars.createIndex({ brand: 1 }); // 1 for ascending order
```

Check query performance with `explain()`:

```javascript
db.cars.find({ brand: "Toyota" }).explain("executionStats");
```

---

### **Exercise for Students**

1. **Create** a `cars` collection and insert the following documents:

    - A Honda Civic from 2019 with features: ["Air Conditioning", "Cruise Control"].
    - A BMW X5 from 2021 with features: ["Navigation", "Heated Seats", "Bluetooth"].
    - A Tesla Model S from 2022 with features: ["Autopilot", "Electric"].

2. **Query** the collection:

    - Retrieve all cars made in or after 2020.
    - Retrieve only the `brand` and `model` of cars with the feature "Bluetooth."

3. **Update**:

    - Change the year of the Tesla Model S to 2023.
    - Add a new feature, "Solar Roof," to all Tesla cars.

4. **Delete**:

    - Remove all cars from before 2018.

5. **Aggregation(after part 2)**:
    - Group cars by `brand` and count how many cars are available for each brand.
    - Filter cars with the feature "Navigation" and calculate the average manufacturing year.
