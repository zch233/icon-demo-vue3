// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ContainerOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContainerOutlined';

export interface ContainerOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ContainerOutlined: ContainerOutlinedIconType = (props, context) => <Icon name='ContainerOutlined' {...{ ...props, ...context.attrs }} icon={ContainerOutlinedSvg} />;

ContainerOutlined.displayName = 'ContainerOutlined';

export default ContainerOutlined;