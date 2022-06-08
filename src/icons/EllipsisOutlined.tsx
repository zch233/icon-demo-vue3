// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import EllipsisOutlinedSvg from '@ant-design/icons-svg/lib/asn/EllipsisOutlined';

export interface EllipsisOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const EllipsisOutlined: EllipsisOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={EllipsisOutlinedSvg} />;

EllipsisOutlined.displayName = 'EllipsisOutlined';

export default EllipsisOutlined;