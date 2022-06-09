// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyrightCircleFilledSvg from '@ant-design/icons-svg/es/asn/CopyrightCircleFilled';

export interface CopyrightCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCopyrightCircleFilled: CopyrightCircleFilledIconType = (props, context) => (
    <Icon name='CopyrightCircleFilled' {...{ ...props, ...context.attrs }} icon={CopyrightCircleFilledSvg} />
);

IconCopyrightCircleFilled.displayName = 'IconCopyrightCircleFilled';

export default IconCopyrightCircleFilled;