/**
 * @swagger
 * tags:
 *   - name: Students
 *     description: Student management APIs
 *   - name: Enrollments
 *     description: Enrollment management APIs
 */

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               date_of_birth:
 *                 type: string
 *     responses:
 *       201:
 *         description: Student created successfully
 *       400:
 *         description: Bad request
 *
 * /students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student data retrieved
 *       404:
 *         description: Student not found
 *
 *   put:
 *     summary: Update a student's details
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               date_of_birth:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       404:
 *         description: Student not found
 *
 *   delete:
 *     summary: Delete a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student and related enrollments deleted successfully
 *       404:
 *         description: Student not found
 */

/**
 * @swagger
 * /enrollments:
 *   post:
 *     summary: Create a new enrollment
 *     tags: [Enrollments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: integer
 *               course_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Enrollment created successfully
 *       400:
 *         description: Bad request
 *
 * /enrollments/{id}:
 *   get:
 *     summary: Get enrollments by student ID
 *     tags: [Enrollments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Enrollment records retrieved
 *       404:
 *         description: No enrollments found
 *
 *   put:
 *     summary: Update an enrollment
 *     tags: [Enrollments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Enrollment updated successfully
 *       404:
 *         description: Enrollment not found
 *
 *   delete:
 *     summary: Delete an enrollment
 *     tags: [Enrollments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Enrollment deleted successfully
 *       404:
 *         description: Enrollment not found
 */

// module.exports = {};
