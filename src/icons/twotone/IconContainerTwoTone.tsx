// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ContainerTwoToneSvg from '@ant-design/icons-svg/es/asn/ContainerTwoTone';

export interface ContainerTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconContainerTwoTone: ContainerTwoToneIconType = (props, context) => (
    <Icon name='ContainerTwoTone' {...{ ...props, ...context.attrs }} icon={ContainerTwoToneSvg} />
);

IconContainerTwoTone.displayName = 'IconContainerTwoTone';

export default IconContainerTwoTone;