// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ContainerTwoToneSvg from 'icon-base/es/asn/ContainerTwoTone';

export interface ContainerTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconContainerTwoTone: ContainerTwoToneIconType = (props, context) => (
    <Icon name='ContainerTwoTone' {...{ ...props, ...context.attrs }} icon={ContainerTwoToneSvg} />
);

IconContainerTwoTone.displayName = 'IconContainerTwoTone';
IconContainerTwoTone.theme = 'twotone';
IconContainerTwoTone.originName = 'container';

export default IconContainerTwoTone;
