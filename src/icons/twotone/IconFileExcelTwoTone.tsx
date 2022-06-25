// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileExcelTwoToneSvg from 'icon-base/es/asn/FileExcelTwoTone';

export interface FileExcelTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileExcelTwoTone: FileExcelTwoToneIconType = (props, context) => (
    <Icon name='FileExcelTwoTone' {...{ ...props, ...context.attrs }} icon={FileExcelTwoToneSvg} />
);

IconFileExcelTwoTone.displayName = 'IconFileExcelTwoTone';
IconFileExcelTwoTone.theme = 'twotone';
IconFileExcelTwoTone.originName = 'file-excel';

export default IconFileExcelTwoTone;
