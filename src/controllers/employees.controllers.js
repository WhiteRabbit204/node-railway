import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "SOMETHING GOES WRONG"
        })
    }
}

export const getEmployee = async (req, res) => {
    try {
        console.log(req.params.id)
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'EMPLOYEE NOT FOUND'
        })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "SOMETHING GOES WRONG"
        })
    }
}

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body
    try {
        const [rows] = await pool.query('INSERT INTO employee(name, salary) VALUES (?, ?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message: "SOMETHING GOES WRONG"
        })
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            menssage: 'EMPLOYE NOT FOUND'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "SOMETHING GOES WRONG"
        })
    }
}

export const updateEmployee = async (req, res) => {
    const { id } = req.params
    const { name, salary } = req.body
    try {
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
        console.log(result)

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Employee not found'
        })

        const [rows] = await pool.query('SELECT * FROM employEe WHERE id = ?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wron'
        })
    }
}