// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TabletFilledSvg from '@ant-design/icons-svg/lib/asn/TabletFilled';

export interface TabletFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TabletFilled: TabletFilledIconType = (props, context) => <Icon name='TabletFilled' {...{ ...props, ...context.attrs }} icon={TabletFilledSvg} />;

TabletFilled.displayName = 'TabletFilled';

export default TabletFilled;