import {
    Attached,
    ChildrenContainerView,
    Content,
    Data,
    FileProperties,
    Floated,
    Format,
    GroupDirection,
    Icon,
    IconFileTypes,
    IdField,
    Label,
    LabelPosition,
    Mark,
    Name,
    Options,
    Placeholder,
    Prefix,
    Rows,
    Size,
    Subheader,
    Suffix,
    TextAlign,
    Type,
} from "../General_component/General_component_JS";

function ChooseProperties(nameComponent, index, nameItem) {
    // -------------------------------------------------------------
    // Choose properties follow nameItem of each attribute
    // -------------------------------------------------------------

    switch (nameComponent) {
        case "Attached":
            return <Attached key={index} keyId={nameComponent} />;
        case "ChildrenContainerView":
            return <ChildrenContainerView key={index} keyId={nameComponent} />;
        case "Content":
            return <Content key={index} keyId={nameComponent} />;
        case "Data ":
            return <Data key={index} keyId={nameComponent} />;
        case "FileProperties":
            return <FileProperties key={index} keyId={nameComponent} />;
        case "Floated":
            return <Floated key={index} keyId={nameComponent} />;
        case "Format":
            return <Format key={index} keyId={nameComponent} />;
        case "GroupDirection":
            return <GroupDirection key={index} keyId={nameComponent} />;
        case "Icon":
            return <Icon key={index} keyId={nameComponent} />;
        case "IconFileTypes":
            return <IconFileTypes key={index} keyId={nameComponent} />;
        case "IdField":
            return <IdField key={index} keyId={nameComponent} />;
        case "Label":
            return <Label key={index} keyId={nameComponent} />;
        case "LabelPosition":
            return <LabelPosition key={index} keyId={nameComponent} />;
        case "Mark":
            return <Mark key={index} keyId={nameComponent} />;
        case "Name":
            return <Name key={index} keyId={nameComponent} />;
        case "Options":
            return (
                <Options
                    key={index}
                    keyId={nameComponent}
                    nameItem={nameItem}
                />
            );
        case "Placeholder":
            return <Placeholder key={index} keyId={nameComponent} />;
        case "Prefix":
            return <Prefix key={index} keyId={nameComponent} />;
        case "Rows":
            return <Rows key={index} keyId={nameComponent} />;
        case "Size":
            return <Size key={index} keyId={nameComponent} />;
        case "Subheader":
            return <Subheader key={index} keyId={nameComponent} />;
        case "Suffix":
            return <Suffix key={index} keyId={nameComponent} />;
        case "TextAlign":
            return <TextAlign key={index} keyId={nameComponent} />;
        case "Type":
            return <Type key={index} keyId={nameComponent} />;
        default:
            return <div key={index}>Khong tim thay phan tu Content</div>;
    }
}

export default ChooseProperties;
