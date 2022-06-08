// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoreOutlined';

export interface MoreOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MoreOutlined: MoreOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={MoreOutlinedSvg} />;

MoreOutlined.displayName = 'MoreOutlined';

export default FunctionalComponent;