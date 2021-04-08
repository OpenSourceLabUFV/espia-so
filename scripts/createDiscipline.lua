NAME = ""

README = [[
---
slug: "%s"
title: "%s"
periodo: "%s"
code: "%s"
hasContent: false
---

## Visão Geral

## Ementa

## Conteúdo
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

while true do
    local discipline = {}
    io.write("Insira o Nome da Disciplina: ")
    discipline.name = io.read("*l")
    io.write("Insira o período da disciplina (0 se for optativa): ")
    discipline.semester = io.read("*l")
    
    createFolder(discipline.name)
    createFile(discipline)
end