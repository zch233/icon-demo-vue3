// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DingtalkOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingtalkOutlined';

export interface DingtalkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DingtalkOutlined: DingtalkOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DingtalkOutlinedSvg} />;

DingtalkOutlined.displayName = 'DingtalkOutlined';

export default FunctionalComponent;