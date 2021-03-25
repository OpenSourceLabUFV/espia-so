NAME = ""

README = [[
---
slug: "%s"
title: "%s"
periodo: "%s"
---

Hello
]]

local function createFolder(folderName)
    NAME = folderName:gsub(' ', ''):lower()
    local path = string.format("../disciplinas/%s", NAME)
    os.execute("mkdir -p " .. path)
end

local function createFile(discipline)
    local path = string.format("/disciplinas/%s", NAME)
    print(path)
    local file = io.open(".." .. path .. "/README.md", "w")

    file:write(README:format(path, discipline.name, discipline.semester))
    file:close()
end

local function checkName(discipline)

    if (discipline.name:match("%W")) then
        error("O nome da disciplina não pode conter caracteres especiais.")
    end

end

local discipline = {}
io.write("Insira o Nome da Disciplina: ")
discipline.name = io.read("*l")
io.write("Insira o período da disciplina (0 se for optativa): ")
discipline.semester = io.read("*l")

--checkName(discipline)
createFolder(discipline.name)
createFile(discipline)
