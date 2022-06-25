// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilePdfTwoToneSvg from 'icon-base/es/asn/FilePdfTwoTone';

export interface FilePdfTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFilePdfTwoTone: FilePdfTwoToneIconType = (props, context) => (
    <Icon name='FilePdfTwoTone' {...{ ...props, ...context.attrs }} icon={FilePdfTwoToneSvg} />
);

IconFilePdfTwoTone.displayName = 'IconFilePdfTwoTone';
IconFilePdfTwoTone.theme = 'twotone';
IconFilePdfTwoTone.originName = 'file-pdf';

export default IconFilePdfTwoTone;
