// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ContainerFilledSvg from '@ant-design/icons-svg/lib/asn/ContainerFilled';

export interface ContainerFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ContainerFilled: ContainerFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ContainerFilledSvg} />;

ContainerFilled.displayName = 'ContainerFilled';

export default FunctionalComponent;