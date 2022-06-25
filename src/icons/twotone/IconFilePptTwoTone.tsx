// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilePptTwoToneSvg from 'icon-base/es/asn/FilePptTwoTone';

export interface FilePptTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFilePptTwoTone: FilePptTwoToneIconType = (props, context) => (
    <Icon name='FilePptTwoTone' {...{ ...props, ...context.attrs }} icon={FilePptTwoToneSvg} />
);

IconFilePptTwoTone.displayName = 'IconFilePptTwoTone';
IconFilePptTwoTone.theme = 'twotone';
IconFilePptTwoTone.originName = 'file-ppt';

export default IconFilePptTwoTone;
