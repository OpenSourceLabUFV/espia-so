local function createFolder(mainName, subName)
    local path = string.format("../disciplinas/%s/%s", mainName, subName)
    os.execute("mkdir -p " .. path)
end

local function createFolders(name)
    local subFolders = {"implementacoes", "resumos", "roteiros"}
    for i, sub in ipairs(subFolders) do
        createFolder(name[1], sub)
    end
end

local function formatName(name)
    name[1] = name[1]:gsub(' ', ''):lower()

    if (name[1]:match("%W")) then
        error("O nome da disciplina não pode conter caracteres especiais.")
    end

end

local discipline = {io.read("*l")}
formatName(discipline)
createFolders(discipline)

