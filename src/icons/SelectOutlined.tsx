// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SelectOutlinedSvg from '@ant-design/icons-svg/lib/asn/SelectOutlined';

export interface SelectOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SelectOutlined: SelectOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SelectOutlinedSvg} />;

SelectOutlined.displayName = 'SelectOutlined';

export default FunctionalComponent;