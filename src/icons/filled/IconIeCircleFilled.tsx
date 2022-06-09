// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import IeCircleFilledSvg from '@ant-design/icons-svg/es/asn/IeCircleFilled';

export interface IeCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconIeCircleFilled: IeCircleFilledIconType = (props, context) => (
    <Icon name='IeCircleFilled' {...{ ...props, ...context.attrs }} icon={IeCircleFilledSvg} />
);

IconIeCircleFilled.displayName = 'IconIeCircleFilled';

export default IconIeCircleFilled;