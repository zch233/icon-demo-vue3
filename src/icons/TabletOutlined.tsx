// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TabletOutlinedSvg from '@ant-design/icons-svg/lib/asn/TabletOutlined';

export interface TabletOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TabletOutlined: TabletOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={TabletOutlinedSvg} />;

TabletOutlined.displayName = 'TabletOutlined';

export default TabletOutlined;